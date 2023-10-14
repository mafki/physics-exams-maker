import {  Text, View, StyleSheet } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    table: {
        display: "table",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 1,

    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "33.3%",
        borderStyle: "solid",
        borderWidth: 1,


    },
    tableCell: {


        fontSize: 13,
        paddingTop: "4%",
        paddingRight: "2%",
        paddingBottom: "4%",
        textAlign: "right",
        fontWeight: "bold",

    },
    tableCell1: {
        textAlign: "right",
        padding: "5px",
        fontSize: 10
    },
    tableCell2: {
        fontSize: 13,
        paddingTop: "4%",
        paddingBottom: "4%",
        textAlign: "center",
        fontWeight: "bold",
    },

}
);

export default function Header (props){
    const {fullname,loop,place,date,examtype,niveau}=props
    return(
        <View style={styles.table}>
            <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                    <View style={styles.tableCell}>
                        <Text>السنة الدراسية : 3202 / 4202</Text>
                        <Text >{date} التاريخ :</Text>
                        <Text >الزمن : 03 دق</Text>
                    </View>
                </View>
                <View style={styles.tableCol}>
                    <View style={styles.tableCell2}>
                        <Text >فرض مراقبة رقم 1</Text>
                        <Text >علوم فيزيائية</Text>
                    </View>
                </View>
                <View style={styles.tableCol}>
                    <View style={styles.tableCell}>
                        <Text>{place} المدرسة الإعدادية </Text>
                        <Text>{fullname} الاستاذ : </Text>
                        <Text> اساسي  {niveau}  المستوى : </Text>
                    </View>
                </View>
            </View>
            <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell1}>القسم : 9 أساسي ............ الرقم : ............</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell1}>اللقب : ...........................................</Text>
                </View>
                <View style={styles.tableCol}>
                    <Text style={styles.tableCell1}>الاسم : ...........................................</Text>
                </View>
            </View>
        </View>
);
    }
