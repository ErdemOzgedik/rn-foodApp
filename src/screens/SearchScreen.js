import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultList from "../components/ResultList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  [results, errorMessage, loading, searchApi] = useResults();

  const onChange = (term) => {
    setSearchTerm(term);
  };

  const CostEffectiveList = useMemo(() => {
    return (
      <ResultList
        results={results.filter((result) => {
          return result.price === "$";
        })}
        header={"Cost Effective"}
      />
    );
  }, [results]);

  const BitPricerList = useMemo(() => {
    return (
      <ResultList
        results={results.filter((result) => {
          return result.price === "$$";
        })}
        header={"Bit Pricier"}
      />
    );
  }, [results]);

  const BigSpenderList = useMemo(() => {
    return (
      <ResultList
        results={results.filter((result) => {
          return result.price === "$$$";
        })}
        header={"Big Spender"}
      />
    );
  }, [results]);

  return (
    <>
      <View style={styles.info}>
        {loading ? (
          <Text>Loadinggggg</Text>
        ) : errorMessage ? (
          <Text>{errorMessage}</Text>
        ) : (
          <Text>{results?.length} result found!!!</Text>
        )}
      </View>
      <SearchBar
        searchTerm={searchTerm}
        onChange={onChange}
        onSubmit={() => searchApi(searchTerm)}
      />
      <ScrollView>
        {CostEffectiveList}
        {BitPricerList}
        {BigSpenderList}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    marginLeft: 15,
  },
});

export default SearchScreen;



