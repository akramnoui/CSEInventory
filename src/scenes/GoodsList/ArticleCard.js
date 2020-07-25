import React, { Component } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class ArticleCard extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View>
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            }}
            style={{ height: 120, width: 163, resizeMode: "cover" }}
          />
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 3,
              flexDirection: "column",
            }}
          >
            <Text numberOfLines={1} style={styles.title}>
              {this.props.title}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
              {this.props.desc}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 196,
    width: 163,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
    marginBottom: 3,
  },
  description: {
    fontSize: 14,
    fontWeight: "normal",
    flexWrap: "wrap",
  },
});
