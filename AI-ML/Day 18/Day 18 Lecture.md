{\rtf1\ansi\deff0\nouicompat{\fonttbl{\f0\fnil\fcharset0 Calibri;}{\f1\fnil\fcharset2 Symbol;}}
{\*\generator Riched20 10.0.18362}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\b\f0\fs36\lang9 Artificial Intelligence & Machine Learning | Batch 1 - Day 18 Overview\par
DAY 18 AGENDA\par

\pard{\pntext\f1\'B7\tab}{\*\pn\pnlvlblt\pnf1\pnindent0{\pntxtb\'B7}}\fi-360\li720\sa200\sl276\slmult1\b0\fs28 Boxplot\par
{\pntext\f1\'B7\tab}Boxon Plot\par
{\pntext\f1\'B7\tab}Dealing with Outliers\par
{\pntext\f1\'B7\tab}Correlation\par
{\pntext\f1\'B7\tab}Dealing with different correlation\par
{\pntext\f1\'B7\tab}Feature Selection\par
{\pntext\f1\'B7\tab}Heatmap\par
{\pntext\f1\'B7\tab}PairPlot\par
{\pntext\f1\'B7\tab}BarPlot\par
{\pntext\f1\'B7\tab}ScatterPlot\par
{\pntext\f1\'B7\tab}PointPlot\par

\pard\sa200\sl276\slmult1\b\fs32 Boxplot :\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\b0\fs28 data.bloxplot() will give the blox plot of the data.\par
{\pntext\f0 2.\tab}Data.bloxplot(figsize=()) The arguments can be passed in figsize to define the size of the figure.\par
{\pntext\f0 3.\tab}Bloxplot also helps in the detection of outliers.\par
{\pntext\f0 4.\tab}We can explore the interquartile ranges.\par
{\pntext\f0 5.\tab}Look at the 5 point summary.\par
{\pntext\f0 6.\tab}The data which falls out the plot are noises or outliers.\par
{\pntext\f0 7.\tab}Pandas and Seaborn both can plot boxplots.\par
{\pntext\f0 8.\tab}Seaborn bloxplots are much more interactive than the One plotted using Pandas.\par
{\pntext\f0 9.\tab}We can infer out the features which have maximum, moderate, and least outliers.\par
{\pntext\f0 10.\tab}BoxPlot as based on the 5 point summary\par
{\pntext\f0 11.\tab}distplot plots a distribution plot\par

\pard\sa200\sl276\slmult1\b\fs32 Boxon plot :\b0\fs22\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\fs28 It is a seaborn graph.\par
{\pntext\f0 2.\tab}It is more interactive than bloxplot.\par

\pard\sa200\sl276\slmult1\b\fs32 Dealing with  outliers:\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\b0\fs28 when some features have max outliers in that case we can either delete or use those outliers.\par
{\pntext\f0 2.\tab}Deleting more outliers we could loose originality of data.\par
{\pntext\f0 3.\tab}Removing many outliers will make the model incapable of its task.\par
{\pntext\f0 4.\tab}Having the domain knowledge you can decide which rare cases can be eliminated.\par
{\pntext\f0 5.\tab}We should often accept moderate outliers.\par
{\pntext\f0 6.\tab}We can directly accept the least outliers.\par

\pard\sa200\sl276\slmult1\b\fs32 Correlation:\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\b0\fs28 It is a mathematical coefficient which gives the relation between two cases or features.\par
{\pntext\f0 2.\tab}Using correlation we can define how much one feature affects the other feature.\par
{\pntext\f0 3.\tab}The range is between -1 to +1.\par
{\pntext\f0 4.\tab}-1 says the features have a strong negative correlation.\par
{\pntext\f0 5.\tab}+1 says the features have a strong positive correlation\par

\pard\sa200\sl276\slmult1\b\fs32 Dealing with different correlation:\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\b0\fs28 -.2 tp +0.2 is considered as no correlation.\par
{\pntext\f0 2.\tab}-0.3 to -0.6 and +0.3 to +0.6 is considered as moderate negative/positive correlation.\par
{\pntext\f0 3.\tab}-0.6to -0.8 and +0.6 to +0.8 is a good correlation.\par
{\pntext\f0 4.\tab}More than -0.8 to +0.8 is a strong correlation \par

\pard\sa200\sl276\slmult1\b\fs32 Feature Selection :\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\b0\fs28 When there is no correlation simply drop these correlations.\par
{\pntext\f0 2.\tab}Based on the correlation coefficient we select the appropriate features.\par
{\pntext\f0 3.\tab}We should check all other coefficients of relation in data and then we should decide what to do with that feature\par

\pard\sa200\sl276\slmult1\b\fs32 Heatmap :\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\b0\fs28 This helps us to plot the correlation.\par
{\pntext\f0 2.\tab}Sns.heatmap(data.corr())  displays the heatmap.\par

\pard\sa200\sl276\slmult1\b\fs32 Pairplot :\b0\fs22\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\fs28 sns.pairplot(data) will plot the pairplot for the data.\par
{\pntext\f0 2.\tab}2 Paired samples are used to plot one data\par
{\pntext\f0 3.\tab}We can decide the correlation lookin at the graph\par
{\pntext\f0 4.\tab}sns.pairplot(data,hue=\rdblquote Outcome\rdblquote ) Displays the pairplot in 2 colours\par

\pard\sa200\sl276\slmult1\b\fs32 Bar plot :\par
\b0\fs28 sns.barplot(x=data[],y=data[]) Gives you barplot between specified features\par
\b\fs32 Scatter Plot:\par
\b0\fs28 sns.scatterplot(x=data[],y=data[]) Gives the scatterplot between the specified features\par
\b\fs32 Point Plot :\par
\b0\fs28 sns.pointplot(x=data[],y=data[]) Gives the pointplot between the specified features\par
\b\fs32 Example EDA of a dataset :\par

\pard 
{\pntext\f0 1.\tab}{\*\pn\pnlvlbody\pnf0\pnindent0\pnstart1\pndec{\pntxta.}}
\fi-360\li720\sa200\sl276\slmult1\b0\fs28 WE can use data[].value_counts will give you the number of records in each feature.\par
{\pntext\f0 2.\tab}pd.crosstab(x=,y=) Gives a cross table for the specified features .It can two values and the first value can be string or categorical .\par
{\pntext\f0 3.\tab}Sns.lmplot(x=,y=)\par
{\pntext\f0 4.\tab}You can drop features use x=data.drop(axis=0/1) The axis defines either row or column that has to be deleted of the feature\par
}
