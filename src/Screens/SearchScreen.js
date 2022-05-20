import React, {useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () =>{
    
    const [term,setTerm] = useState('');
    const [searchApi,results,errMsg] = useResults();

    const filterResultsByPrice = (price) =>{
        
    }; 
    return (
        <View>
            <SearchBar  
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null }
            <Text>we have found {results.length} results</Text>
            <ResultsList title="Cost Effective"/>
            <ResultsList title="Bit Pricier"/>
            <ResultsList  title="Big Spender"/>
    </View>
    )


};

const styles =  StyleSheet.create({
    
});

export default SearchScreen;