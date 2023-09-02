/* eslint-disable no-unused-vars */
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const MyDocument = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>
            <div>
              <p>Answering some Question below inside the blog page</p>
              <h2>
                Tell us the differences between uncontrolled and controlled
                components.
              </h2>

              <h2>How to validate React props using PropTypes</h2>

              <h2>Tell us the difference between nodejs and express js.</h2>

              <h2>
                What is a custom hook, and why will you create a custom hook?
              </h2>
            </div>
          </Text>
        </View>
        {/* <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
      </Page>
    </Document>
  );
};

export default MyDocument;
