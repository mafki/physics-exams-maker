import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react';
import Ex1 from '../data/DevoirContrôleN1/ex1/Ex1';
import Ex from '../data/DevoirContrôleN1/Ex';
import check from './Check';

const styles = StyleSheet.create({
    table: {
        display: "table",
        width: "100%",
        

    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol1: {
        width: "5%",
        


    },
    tableCol2: {
        width: "95%",
        


    },
    tableCell: {

        fontSize: 13,
        paddingTop: "%",
        paddingRight: "1%",
        paddingBottom: "1%",
        textAlign: "right",
        fontWeight: "bold",


    },
    tableCell3: {
        textAlign: "center",
        paddingTop: "100%",

    },
    tableCell2: {

    },
    head: {
        fontSize: "20px",
        textAlign: "right",
        paddingRight: "10px"
    },

}
);




function ExCell1(props) {
    const [total, setTotal] = useState(0);
    const [exComponents, setExComponents] = useState([]);
    const [used, setused] = useState([])

    useEffect(() => {
        let tempTotal = 0;
        const tempExComponents = [];
        const u = []; // Initialize u as an array to track used imageSrc values

        for (let i = 0; i < 100; i++) {
            const ex1Data = Ex1();
            if (check(ex1Data) && (tempTotal + ex1Data[0].value) <= 10) {
                for (let key1 in ex1Data) {
                    if (key1 !== "0" && !u.includes(ex1Data[key1].imageSrc)) {
                        const subObject = ex1Data[key1];
                        

                            tempTotal += subObject.value;
                            u.push(subObject.imageSrc);
                            tempExComponents.push(<Ex img={subObject.imageSrc} point={subObject.value} key={i} />);
                            setTotal(tempTotal);
                            setused(u);
                            setExComponents(tempExComponents);
                        
                    }
                }
            } else {
                if (!u.includes(ex1Data.imageSrc)) {
                    if ((tempTotal + ex1Data.value) <= 10) {
                        tempTotal += ex1Data.value;
                        u.push(ex1Data.imageSrc);


                        tempExComponents.push(<Ex id="1" img={ex1Data.imageSrc} point={ex1Data.value} key={i} />);
                        setTotal(tempTotal);
                        setused(u);
                        setExComponents(tempExComponents);
                    }
                }
            }
        }

        // Update state after the loop with the collected components and used imageSrc values

    }, []);


    return (
        <View>
            <Text style={styles.head}>(نقطة{" " + total}) {props.id}تمرين عدد</Text>
            <View style={styles.table} >
                <View>
                    {exComponents.map((exComponent, index) => (
                        <React.Fragment key={index}>{exComponent}</React.Fragment>
                    ))}
                </View>
            </View>
        </View>
    );
}

ExCell1.defaultProps = {
    id: 1,
    data: "",
};

export default ExCell1;
