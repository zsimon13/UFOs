# UFOs

## Overview 
The purpose of this project was to develop a webpage where UFO siting across the US could be stored and searched through for analysis. The webpage would store the siting data, and allow users to filter through the sitings based on location, date, and shapes of the UFOs.
## Results
When opened the website's home page populates some general UFO data, as well as the enitirity of UFO data stored in the table. This will allow users to scroll through and see all available inforamtion, loaded chronologically be default.

### Web Page
![webpage](https://user-images.githubusercontent.com/102814578/178115641-ce95de40-9da5-45a8-995c-ecd130d4e4f1.png)


### Filter Table
![filter_table](https://user-images.githubusercontent.com/102814578/178115647-2b8373c7-05e3-47db-a44d-ba93fce43862.png)


The picture above shows available search criteria for the UFO data including:
- Date
- City
- State
- Country
- Shape of the UFO

### Search Using one Filter
![1_filter](https://user-images.githubusercontent.com/102814578/178115650-aad6321c-691a-4780-90f5-e844e2b35d30.png)


When a single filter is applied, the data is limited to entries that match that specific filter. As can be seen in the example above: when a "Date" is selcected, only entries with that date will populate the table.

### Search Using Multiple Filters
![2_filters](https://user-images.githubusercontent.com/102814578/178115654-96a878f8-58d7-44f1-afb1-9d70ede8c988.png)


The picture above shows how the data will populate when multiple filters are utilized. The only results that will populate in the table will iunclude matches for all filter used. In this case results will match the "Date" and "State" filters.

## Summary

### Webpage's Major Drawback
The main drawback of the webpage would be the lack of text recognition in the script. When using filters to search trhough the table data, the syntax and punctuation must match the stored data excatly. This means that the filters are case sensitive and the date is format sensitive. It does not recognize the "true" value of the search term, but only the exact value. This could also affect additional data being input into the webpage as more UFOs are seen. ie: they input the date as **01/010/2010** rather than **1/1/2010**. 

### Suggestions
- Allowing the search filters to be not case senstive would greately improve usability of the web app.
- Adding input boxes for addtional UFO siting submissions would also increase the analytical capabilities of the website.
