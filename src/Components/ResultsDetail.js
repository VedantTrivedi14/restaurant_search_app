import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const ResultsDetail =({result}) =>{
    return (
        <View style={styles.container}>
            <Image style={styles.imgStyle} source={{uri : result.image_url}}/>
            <Text style={styles.fontStyle}> {result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );

};
const styles = StyleSheet.create({
    imgStyle : {
        width :250,
        height :200,
        borderRadius : 4,
        marginBottom :5,
    },
    fontStyle :{
        fontWeight :'bold',
    },
    container :{
        marginHorizontal :15,

    },
});

export default ResultsDetail;
  