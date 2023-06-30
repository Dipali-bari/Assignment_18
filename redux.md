Redux is a pattern and library to manage stte across the Apploication.


redux is a 3rd Party Library

npm i redux

1.Create react Application

2.Create Redux store 
    npm i redux 

    create Js file 

    import cretestore() from 'redux' legacy_createStore()

    and then create the store Using createStore() and export it

3> Make Store available to ALL componanats in react app

    - install react-redux library
    npm i react-redux

    -react-redux library will provide one pre-defined Componnat call provider
    using Provider Compopnanat we can make store avilalabe to all react Componanat


    import {Provider} from 'react-redux'

    wrap APP coponaant inside the Provider Componanat

    -Provider Componanat will take one prope yhe key is  store  as value pass storename


4)To Add or Modify in the redux Storethen it should be done using a special function called Reducer


    1.Create aReducer Function 
        reducer is simple Javascript  function which contain two parameter state  and action and return state

    2. Register reducer Function with the store

        export the reducer after that import reducer in redux store after that pass the name of reducer as first argument in createStore

    3.Add Defualt data or initial data inside the reducer

            - create initial Data
            - Assiign initial data to the first      parameterof reducer
            - Whenevr application start , internally redux will call reducer fuction and whatever it return will be store inside the redux store

    4. Using dispatch() we can pass the information to the reducer

    dispatch() is a pre-defined function


    we can passs the data from copnaant to dispatch using Action object


    action is a special object which takes one meadatory 
            type and whose value should be some unique string

    Componaant should call dispatch() and the data inside the action object as second 