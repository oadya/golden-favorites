import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elasticsearch',
  templateUrl: './elasticsearch.component.html',
  styleUrls: ['./elasticsearch.component.scss']
})
export class ElasticsearchComponent implements OnInit {


  allLinks: any[] = [
    "https://github.com/thombergs/code-examples/tree/master/spring-boot/spring-boot-elasticsearch",
    "https://codecurated.com/blog/how-to-connect-java-with-elasticsearch/",
    "https://github.com/eugenp/tutorials/tree/master/persistence-modules/spring-data-elasticsearch",
    "https://www.journaldev.com/18148/spring-boot-elasticsearch",
    "https://codecurated.com/blog/how-to-connect-java-with-elasticsearch/",
    "https://mkyong.com/spring-boot/spring-boot-spring-data-elasticsearch-example/",
    "https://www.javacodemonk.com/spring-data-elasticsearch-https-and-basic-auth-ed8ba04d",
    "https://github.com/sumanentc/elasticsearch",
    "https://spinscale.de/posts/2020-04-15-introduction-into-the-elasticsearch-java-rest-client.html",
    "https://dzone.com/articles/23-useful-elasticsearch-example-queries",
    "https://github.com/brilianfird/elasticsearch-with-spring-boot",
    "https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html#request-body-search-query",
    "https://dzone.com/articles/spring-boot-elasticsearch",
    "https://javamana.com/2021/04/20210402134819970s.html",
    "https://github.com/eugenp/tutorials/tree/master/persistence-modules/spring-data-elasticsearch",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-rest/master/_other_authentication_methods.html",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/_basic_authentication.html",
    "https://www.tabnine.com/code/java/classes/org.elasticsearch.index.query.QueryBuilders",
    "https://elasticsearch-cheatsheet.jolicode.com/",
    "https://java.hotexamples.com/examples/org.elasticsearch.index.query/QueryBuilders/rangeQuery/java-querybuilders-rangequery-method-examples.html",
    "https://betterjavacode.com/programming/elasticsearch-spring-boot",
    "https://programming.vip/docs/combination-query-aggregation-query.html",
    "https://medium.com/@luthfihrz/basic-operations-of-elasticsearch-with-spring-boot-and-spring-data-b1aa241ad9c6",
    "https://github.com/luthfihariz/learn-eswithspring",
    "https://aspiresoftware.in/blog/commonly-used-elasticsearch-queries-in-spring-boot-application/",
    "https://www.tabnine.com/code/java/methods/org.elasticsearch.index.query.QueryBuilders/rangeQuery",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-query-builders.html",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html",
    "https://dzone.com/articles/23-useful-elasticsearch-example-queries",
    "https://spinscale.de/posts/2020-08-06-introduction-into-spring-data-elasticsearch.html",
    "https://www.programcreek.com/java-api-examples/?class=org.elasticsearch.index.query.QueryBuilders&method=termsQuery",
    "https://programtalk.com/java-api-usage-examples/org.elasticsearch.index.query.BoolQueryBuilder/",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-rest/master/_basic_authentication.html",
    "https://hcdn.safe.socgen/mux/hob/#/forbidden",
    "https://mkyong.com/elasticsearch/elasticsearch-hello-world-example/",
    "https://kreuzwerker.de/en/post/elastic-search-as-a-structured-search-provider",
    "https://github.com/eugenp/tutorials/tree/master/persistence-modules/spring-data-elasticsearch",
    "https://www.programcreek.com/java-api-examples/?code=zhangyanbo2007%2Fyoukefu%2Fyoukefu-master%2Fsrc%2Fmain%2Fjava%2Fcom%2Fukefu%2Fwebim%2Fservice%2Fes%2FTopicRepositoryImpl.java",
    "https://dev.to/balvinder294/get-matching-score-with-spring-data-elastic-search-in-spring-boot-for-a-query-3eff",
    "https://programtalk.com/java-api-usage-examples/org.elasticsearch.index.query.BoolQueryBuilder/",
    "https://newbedev.com/elasticsearch-searching-with-hyphens",
    "https://www.testcontainers.org/modules/elasticsearch/",
    "https://www.tabnine.com/code/java/methods/org.elasticsearch.index.query.QueryBuilders/regexpQuery",
    "https://programtalk.com/java-api-usage-examples/org.elasticsearch.index.query.BoolQueryBuilder/",
    "https://spinscale.de/posts/2020-08-06-introduction-into-spring-data-elasticsearch.html",
    "https://hackernoon.com/elasticsearch-in-java-spring-boot-starter-pack-3kx330h",
    "https://codecurated.com/blog/how-to-connect-java-with-elasticsearch/",
    "https://medium.com/geekculture/elastic-search-queries-hands-on-examples-fe5b2bc10c0e",
    "https://opensearch.org/docs/latest/clients/java-rest-high-level/",
    "https://stackoverflow.com/questions/44447205/set-field-data-true-on-java-elasticsearch",
    "https://searchcode.com/codesearch/view/115983310/",
    "https://piotrminkowski.com/2019/03/29/elasticsearch-with-spring-boot/",
    "https://www.elastic.co/guide/en/elasticsearch/reference/7.15/paginate-search-results.html#search-after",
    "https://sodocumentation.net/elasticsearch/topic/3703/curl-commands",
    "https://dzone.com/articles/sprinkle-some-elk-on-your-spring-boot-logs",
    "https://programmer.help/blogs/springboot-integrates-es-advanced-query.html",
    "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html",
    "https://mkyong.com/elasticsearch/elasticsearch-hello-world-example/",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
