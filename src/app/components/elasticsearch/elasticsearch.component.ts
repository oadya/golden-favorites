import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elasticsearch',
  templateUrl: './elasticsearch.component.html',
  styleUrls: ['./elasticsearch.component.scss']
})
export class ElasticsearchComponent implements OnInit {


  bestTutoLinks: any[] = [
    "https://docs.spring.io/spring-data/elasticsearch/docs/4.3.x-SNAPSHOT/reference/html/#reference",
    "https://aspiresoftware.in/blog/commonly-used-elasticsearch-queries-in-spring-boot-application/",
    "https://reflectoring.io/spring-boot-elasticsearch/",
    "https://dzone.com/articles/23-useful-elasticsearch-example-queries",
    "https://codecurated.com/blog/how-to-connect-java-with-elasticsearch/",
    "https://dzone.com/articles/sprinkle-some-elk-on-your-spring-boot-logs",
    "https://sodocumentation.net/elasticsearch/topic/3703/curl-commands",
    "https://www.javatpoint.com/elasticsearch",
    "https://www.journaldev.com/18148/spring-boot-elasticsearch",
    "https://www.baeldung.com/tag/elasticsearch/",
    "https://piotrminkowski.com/2019/03/29/elasticsearch-with-spring-boot/",
    "https://medium.com/geekculture/elastic-search-queries-hands-on-examples-fe5b2bc10c0e",
    "https://spinscale.de/posts/2020-04-15-introduction-into-the-elasticsearch-java-rest-client.html",
    "https://spinscale.de/posts/2020-08-06-introduction-into-spring-data-elasticsearch.html",
    "https://mkyong.com/spring-boot/spring-boot-spring-data-elasticsearch-example/",
    "https://mkyong.com/elasticsearch/elasticsearch-hello-world-example/",
    "https://dzone.com/articles/23-useful-elasticsearch-example-queries",
    "https://javamana.com/2021/04/20210402134819970s.html",
    "https://elasticsearch-cheatsheet.jolicode.com/",
    "https://medium.com/@luthfihrz/basic-operations-of-elasticsearch-with-spring-boot-and-spring-data-b1aa241ad9c6",
    "https://hackernoon.com/elasticsearch-in-java-spring-boot-starter-pack-3kx330h",
    "https://programmer.help/blogs/springboot-integrates-es-advanced-query.html",
    "https://zengcode.medium.com/elasticsearch-java-rest-client-7-10-java-high-level-rest-client-search-apis-f2e24676a80d",


  ];


  elasticPaginationLinks: any[] = [
    "https://coralogix.com/blog/how-to-optimize-your-elasticsearch-queries-using-pagination/",
    "https://mincong.io/2020/01/19/elasticsearch-scroll-api/",
    "https://medium.com/everything-full-stack/elasticsearch-scroll-search-e92eb29bf773",
    "https://www.javatpoint.com/elasticsearch-pagination"

  ];

  elasticLinks: any[] = [
    "https://www.elastic.co/guide/en/elasticsearch/reference/7.6/index.html",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-query-builders.html",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/java-rest-high-search.html",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-rest/current/_basic_authentication.html",
    "https://www.elastic.co/guide/en/elasticsearch/reference/7.15/paginate-search-results.html#search-after",
    "https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html",
    "https://www.elastic.co/guide/en/elasticsearch/reference/6.8/query-dsl-regexp-query.html",
    "https://www.elastic.co/guide/en/elasticsearch/client/java-api/current/java-search-scrolling.html"

  ];

  githubLinks: any[] = [
    "https://github.com/eugenp/tutorials/tree/master/persistence-modules/spring-data-elasticsearch",
    "https://github.com/thombergs/code-examples/tree/master/spring-boot/spring-boot-elasticsearch",
    "https://github.com/brilianfird/elasticsearch-with-spring-boot",
    "https://github.com/luthfihariz/learn-eswithspring",

  ];

  integrationTestLinks: any[] = [
    "https://github.com/graphaware/elasticsearch-tests-integration",
    "https://programmer.group/integrating-spring-data-elasticsearch.html"
  ];


  othersLinks: any[] = [
    "https://moi.vonos.net/bigdata/elasticsearch/",
    "https://opensearch.org/docs/latest/clients/java-rest-high-level/",
    "https://programmer.group/integrating-spring-data-elasticsearch.html",
    "https://newbedev.com/elasticsearch-searching-with-hyphens",
    "https://www.programcreek.com/java-api-examples/?code=zhangyanbo2007%2Fyoukefu%2Fyoukefu-master%2Fsrc%2Fmain%2Fjava%2Fcom%2Fukefu%2Fwebim%2Fservice%2Fes%2FTopicRepositoryImpl.java",
    "https://programtalk.com/java-api-usage-examples/org.elasticsearch.index.query.BoolQueryBuilder/",
    "https://www.javacodemonk.com/spring-data-elasticsearch-https-and-basic-auth-ed8ba04d",
    "https://www.tabnine.com/code/java/classes/org.elasticsearch.index.query.QueryBuilders",
    "https://java.hotexamples.com/examples/org.elasticsearch.index.query/QueryBuilders/rangeQuery/java-querybuilders-rangequery-method-examples.html",
    "https://programming.vip/docs/combination-query-aggregation-query.html",
    "https://www.tabnine.com/code/java/methods/org.elasticsearch.index.query.QueryBuilders/rangeQuery",
    "https://www.tabnine.com/code/java/methods/org.elasticsearch.index.query.QueryBuilders/regexpQuery",
    "https://www.programcreek.com/java-api-examples/?class=org.elasticsearch.index.query.QueryBuilders&method=termsQuery",
    "https://www.testcontainers.org/modules/elasticsearch/",
    "https://stackoverflow.com/questions/44447205/set-field-data-true-on-java-elasticsearch",
    "https://github.com/sumanentc/elasticsearch",
    "https://searchcode.com/codesearch/view/115983310/",
    "https://learntutorials.net/fr/spring-boot/topic/10928/spring-boot-plus-spring-data-elasticsearch",
    "http://people.apache.org/~rmuir/es-coverage/combined/org.elasticsearch.node/NodeBuilder.java.html"

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
