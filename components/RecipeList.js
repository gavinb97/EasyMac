import * as React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

function RecipeList() {

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Food</DataTable.Title>
                <DataTable.Title numberic>Serving Size</DataTable.Title>
                <DataTable.Title numberic>Calories</DataTable.Title>
                <DataTable.Title numberic>Fat</DataTable.Title>
                <DataTable.Title numberic>Carb</DataTable.Title>
                <DataTable.Title numeric>Protein</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                <DataTable.Cell numeric>100</DataTable.Cell>
                <DataTable.Cell numeric>324</DataTable.Cell>
                <DataTable.Cell numberic>3</DataTable.Cell>
                <DataTable.Cell numberic>3</DataTable.Cell>
                <DataTable.Cell numberic>3</DataTable.Cell>
            </DataTable.Row>

            {/* <DataTable.Pagination
                page={page}
                numberOfPages={3}
                onPageChange={(page) => setPage(page)}
                label="1-2 of 6"
                optionsPerPage={optionsPerPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                showFastPagination
                optionsLabel={'Rows per page'}
            /> */}
        </DataTable>
    )
}

export default RecipeList;