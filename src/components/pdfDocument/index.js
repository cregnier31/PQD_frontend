import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import img from '../../assets/images/green.png'

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4'
  },
  section: {
    flexGrow: 1
  }
});

// Create Document Component
export function MyDocument(props)  {
  return(
    <Document >
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{props.text}</Text>
        </View>
      </Page>
    </Document>
    )
  }