var colors=["#6658dd","#1abc9c"],dataColors=$("#Vendas-analytics").data("colors");dataColors&&(colors=dataColors.split(","));var options={chart:{height:385,type:"candlestick"},plotOptions:{candlestick:{colors:{upward:colors[0],downward:colors[1]}}},series:[{data:seriesData}],stroke:{show:!0,colors:"#f1f3fa",width:[1,4]},xaxis:{type:"datetime"},grid:{borderColor:"#f1f3fa"}},chart=new ApexCharts(document.querySelector("#Vendas-analytics"),options);chart.render();colors=["#1abc9c","243,93,93"];(dataColors=$("#deal-analytics").data("colors"))&&(colors=dataColors.split(","));options={series:[{name:"Won",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"Loss",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}],chart:{height:370,type:"line"},stroke:{width:[2,3]},plotOptions:{bar:{columnWidth:"50%"}},colors:colors,dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},legend:{offsetY:7},grid:{padding:{bottom:20}},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:.75,opacityTo:.75,stops:[0,0,0]}},yaxis:[{title:{text:"Net Revenue"}},{opposite:!0,title:{text:"Number of Vendas"}}]};(chart=new ApexCharts(document.querySelector("#deal-analytics"),options)).render();colors=["#f1556c"];(dataColors=$("#campaigns-ratio-chart").data("colors"))&&(colors=dataColors.split(","));options={chart:{height:310,type:"radialBar"},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"16px",color:void 0,offsetY:120},value:{offsetY:76,fontSize:"22px",color:void 0,formatter:function(a){return a+"%"}}}}},fill:{gradient:{enabled:!0,shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},colors:colors,series:[67],labels:["Campaigns Ratio"],responsive:[{breakpoint:380,options:{chart:{height:180}}}]};(chart=new ApexCharts(document.querySelector("#campaigns-ratio-chart"),options)).render();