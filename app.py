from pymongo import MongoClient
from flask import Flask, render_template, request


#################################################
# Database Setup
#################################################
# Create an instance of MongoClient
mongo = MongoClient(port=27017)
db = mongo['Project_3_DB']
# assign each collection to a variable
income = db['Income']
population = db['Population']
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route('/', methods = ['POST', 'GET']) 

def index(): 
    initial = True
    query = {}
    fields = {'County': 1}
    countyList= income.find(query, fields)
    if request.method == 'POST':
        initial = False
        form = request.form
        form = form["county"]
        countyList = retrieve_data(form)
        return render_template("index.html", countyList=countyList, initial=initial)
    else:
        return render_template("index.html",countyList=countyList, initial=initial)




def retrieve_data(form):
    # format the form data to match the database
    form = f"{form} TX"
    # retrieve income data from server
    in_query = {'County': form}
    in_fields = {'County': 1, '2021_Income': 1}
    in_county_data = income.find_one(in_query, in_fields)
    income_data = in_county_data["2021_Income"]

    #retrieve population data from server
    pop_query = {'County': form}
    pop_fields = {'County': 1, 'Population': 1}
    pop_county_data = population.find_one(pop_query, pop_fields)
    population_data = pop_county_data["Population"]
    #combine and display data from server
    # combined_county_data = f"<h2>The income for {form} is {in_county_data}.</h2><hr><h2>The income for {form} is {pop_county_data}</h2>."
    return (form, income_data, population_data)




if __name__ == '__main__':
    app.run(debug=True)
