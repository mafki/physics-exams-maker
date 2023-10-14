import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import React from 'react';


const styles = StyleSheet.create({
    tableRow: {
        flexDirection: "row"
    },
    tableCol1: {
        width: "5%",
        borderStyle: "solid",
        borderLeft:"1px",
        borderRight:"1px",
        fontSize:"13px"


    },
    tableCol2: {
        width: "95%",
        


    },
    tableCell: {

        fontSize: 13,
        paddingRight: "1%",
        textAlign: "right",
        fontWeight: "bold",


    },
    tableCell3: {
        textAlign: "center",
        paddingTop: "100%",

    },
    tableCell2: {

    },


}
);



export default function Ex({ img,point }) {
    return (
        <View style={styles.tableRow} wrap={false}>
            <View style={styles.tableCol1}>
                <View style={styles.tableCell3}>
                    <Text>{point===0?"":point}</Text>
                </View>
            </View>
            <View style={styles.tableCol2}>
                <View style={styles.tableCell}>
                    {/* Use condition to render Image */}
                    <Image src={img}  />
                </View>
            </View>
        </View>
    );
}


