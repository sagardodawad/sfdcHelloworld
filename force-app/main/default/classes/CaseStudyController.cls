public class CaseStudyController {

    @AuraEnabled(cacheable=true)

    public static List<Account> getAccounts(String searchText){

        String searchString = '%'+searchText+'%';  //edge===> %edge%

        return [SELECT Name,Type FROM Account WHERE Name LIKE :searchString];

    }

}

