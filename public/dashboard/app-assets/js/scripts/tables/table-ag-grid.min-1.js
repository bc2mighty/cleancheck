$((function(){"use strict";var e={columnDefs:[{headerName:"First Name",field:"firstname",editable:!0,sortable:!0,filter:!0,width:175,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Last Name",field:"lastname",editable:!0,sortable:!0,filter:!0,width:175},{headerName:"Company",field:"company",editable:!0,sortable:!0,filter:!0,width:250},{headerName:"City",field:"city",editable:!0,sortable:!0,filter:!0,width:125},{headerName:"Country",field:"country",editable:!0,sortable:!0,filter:!0,width:150},{headerName:"State",field:"state",editable:!0,sortable:!0,filter:!0,width:125},{headerName:"Zip",field:"zip",editable:!0,sortable:!0,filter:!0,width:125},{headerName:"Email",field:"email",editable:!0,sortable:!0,filter:!0,width:260,pinned:"left"},{headerName:"Followers",field:"followers",editable:!0,sortable:!0,filter:!0,width:150}],rowSelection:"multiple",floatingFilter:!0,filter:!0,pagination:!0,paginationPageSize:20,pivotPanelShow:"always",colResizeDefault:"shift",animateRows:!0,resizable:!0},t=document.getElementById("myGrid"),i="../../../app-assets/";"laravel"===$("body").attr("data-framework")&&(i=$("body").attr("data-asset-path")),agGrid.simpleHttpRequest({url:i+"data/ag-grid-data.json"}).then((function(t){e.api.setRowData(t)})),$(".ag-grid-filter").on("keyup",(function(){var t;t=$(this).val(),e.api.setQuickFilter(t)})),$(".sort-dropdown .dropdown-item").on("click",(function(){var t,i=$(this);t=i.text(),e.api.paginationSetPageSize(Number(t)),$(".filter-btn").text("1 - "+i.text()+" of 500")})),$(".ag-grid-export-btn").on("click",(function(t){e.api.exportDataAsCsv()})),new agGrid.Grid(t,e),$(window).width()<768?e.columnApi.setColumnPinned("email",null):e.columnApi.setColumnPinned("email","left"),$(window).on("resize",(function(){$(window).width()<768?e.columnApi.setColumnPinned("email",null):e.columnApi.setColumnPinned("email","left")}))}));