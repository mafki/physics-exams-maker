import React from 'react';
import Header from './Header';
import Body from './Body';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Import a font if needed (replace with your font file path)
Font.register({ family: 'Amiri', src: 'https://fonts.gstatic.com/s/amiri/v13/J7aRnpd8CGxBHqUp.ttf' });

const styles = StyleSheet.create({
    body: {
        fontFamily: 'Amiri',
        padding: "2%",
        
        
    },
    content: {
    
        
        
        
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: 10,
    },
}
);

export default function Mainpdf (props) {
    const {fullname,place,date,examtype,niveau}=props
    return(
    <Document>
        <Page style={styles.body} break >
            <View style={styles.content} >
                <Header  fullname={fullname} place={place} date={date} examtype={examtype} niveau={niveau}/>
                <Body />
            </View>
            <Text style={styles.footer} render={({ pageNumber, totalPages }) => ` ${pageNumber} / ${totalPages}`} />
        </Page>
    </Document>
);
    }

