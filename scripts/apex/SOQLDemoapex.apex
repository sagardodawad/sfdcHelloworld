
List<AggregateResult> results=[SELECT Industry, sum(AnnualRevenue) SumOfRevenue
    FROM Account
    GROUP BY Industry];

// System.debug(results);

for (AggregateResult ar : results) {
    System.debug('Industry: ' + ar.get('Industry') + ', SumOfRevenue: ' + ar.get('SumOfRevenue'));
}


// SOSL Query Example in apex
List<List<SObject>> groupedResults = [FIND 'GenePoint' IN ALL FIELDS
                               RETURNING Account(Name), Contact(FirstName, LastName)
                              ];
System.debug(groupedResults.get(0));