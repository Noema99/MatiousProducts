import React, { Component } from "react";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

import {matchSorter} from 'match-sorter'; 

class TableProduits extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: true,
      filtered: []
    };
  }

  componentDidMount() {
    fetch("https://app.getrecall.com/api/products")
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoaded: true,
          items: res.products
        });
      });
  }

  defaultFilterMethod = (filter, row, column) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined ? row[id].accessor === filter.value : true;
  };


  render() {
    const columns = [
        {
          Header: 'Nos produits ',
          columns: [
          {
            Header: 'ID-Produit',
              accessor: '_id',
              filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["_id"] }),
            filterAll: true
          },
           {
             Header: 'Fonctionnalités-Produit',
             accessor: 'features',
             maxWidth: 5000,
             filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["features"] }),
              filterAll: true
            },
            {
              Header: 'Nom-Produit',
              accessor: 'name',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["name"] }),
              filterAll: true
            },
            {
              Header: 'Description-Produit',
              accessor: 'description',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["description"] }),
              filterAll: true
            },
            {
              Header: 'Categorie-Produit',
              accessor: 'category',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["category"] }),
              filterAll: true
            },
            {
              Header: 'SousCategorie-Produit',
              accessor: 'subcategory',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["subcategory"] }),
              filterAll: true
            },
            {
              Header: 'Produit-Créé-le',
              accessor: 'createdAt',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["createdAt"] }),
              filterAll: true
            },
            {
              Header: 'Produit-Modifié-le',
              accessor: 'updatedAt',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["updatedAt"] }),
              filterAll: true
            },
            {
              Header: 'Modèle-Produit',
              accessor: 'modelId',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["modelId"] }),
              filterAll: true
            },
            {
              Header: 'Pid-Produit',
              accessor: 'pid',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["pid"] }),
              filterAll: true
            },
            {
              Header: 'Fiche-Technique',
              accessor: 'datasheet',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["datasheet"] }),
              filterAll: true
            },
            {
              Header: 'Lien',
              accessor: 'link',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["link"] }),
              filterAll: true
            },
            {
              Header: 'Vignette',
              accessor: 'thumbnail',
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["thumbnail"] }),            
              filterAll: true
            },
          ],
      }   
    ]

    var { items, isLoaded } = this.state;

    if (!isLoaded) {
          return <div>toujours en attente </div>;
    } else {
          return <ReactTable columns={columns} data={items}
          filterable
          defaultFilterMethod={this.defaultFilterMethod}               
          />;
    }
  }
}
export default TableProduits;
