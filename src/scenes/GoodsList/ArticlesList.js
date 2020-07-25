import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import ArticleCard from "./ArticleCard";
import { SectionGrid } from "react-native-super-grid";

export default class ArticlesList extends Component {
  render() {
    return (
      <SectionGrid
        style={styles.gridView}
        itemDimension={120}
        sections={[
          {
            title: "Numbers",
            data: [
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 1",
                description: "loob loob loob",
              },
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 2",
                description: "loob loob loob",
              },
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 3",
                description: "loob loob loob",
              },
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 3",
                description: "loob loob loob",
              },
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 3",
                description: "loob loob loob",
              },
            ],
          },
          {
            title: "Cards",
            data: [
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 1",
                description: "loob loob loob",
              },
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 2",
                description: "loob loob loob",
              },
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 2",
                description: "loob loob loob",
              },
              {
                uri:
                  "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                title: "della3 2",
                description: "loob loob loob",
              },
            ],
          },
        ]}
        renderItem={({item}) => ( <ArticleCard title={item.title} desc={item.description} /> )}
        renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader} >{section.title}</Text>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader:{
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    marginLeft: 20,
  },
  gridView :{
    marginTop: 20,
  }
})