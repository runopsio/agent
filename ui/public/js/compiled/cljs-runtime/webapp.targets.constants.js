goog.provide('webapp.targets.constants');
webapp.targets.constants.targets_types_list = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bash",new cljs.core.Keyword(null,"text","text",-1790561697),"bash"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"hashicorp-vault",new cljs.core.Keyword(null,"text","text",-1790561697),"hashicorp-vault"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"k8s",new cljs.core.Keyword(null,"text","text",-1790561697),"k8s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"k8s-apply",new cljs.core.Keyword(null,"text","text",-1790561697),"k8s-apply"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"k8s-exec",new cljs.core.Keyword(null,"text","text",-1790561697),"k8s-exec"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"mongodb",new cljs.core.Keyword(null,"text","text",-1790561697),"mongodb"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"mysql",new cljs.core.Keyword(null,"text","text",-1790561697),"mysql"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"mysql-csv",new cljs.core.Keyword(null,"text","text",-1790561697),"mysql-csv"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"postgres",new cljs.core.Keyword(null,"text","text",-1790561697),"postgres"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"postgres-csv",new cljs.core.Keyword(null,"text","text",-1790561697),"postgres-csv"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"python",new cljs.core.Keyword(null,"text","text",-1790561697),"python"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"node",new cljs.core.Keyword(null,"text","text",-1790561697),"node"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rails",new cljs.core.Keyword(null,"text","text",-1790561697),"rails"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rails-console",new cljs.core.Keyword(null,"text","text",-1790561697),"rails-console"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rails-console-k8s",new cljs.core.Keyword(null,"text","text",-1790561697),"rails-console-k8s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rails-console-ecs",new cljs.core.Keyword(null,"text","text",-1790561697),"rails-console-ecs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"sql-server",new cljs.core.Keyword(null,"text","text",-1790561697),"sql-server"], null)], null);
webapp.targets.constants.target_configs_required = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"hashicorp-vault","hashicorp-vault",341592706),new cljs.core.Keyword(null,"k8s-exec","k8s-exec",-502099740),new cljs.core.Keyword(null,"k8s","k8s",-1824650905),new cljs.core.Keyword(null,"bash","bash",1176231467),new cljs.core.Keyword(null,"k8s-apply","k8s-apply",2139360429),new cljs.core.Keyword(null,"rails-console-k8s","rails-console-k8s",626405581),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"mongodb","mongodb",-2105512721),new cljs.core.Keyword(null,"postgres-csv","postgres-csv",-1073884305),new cljs.core.Keyword(null,"rails-console","rails-console",1187206578),new cljs.core.Keyword(null,"sql-server","sql-server",-101377933),new cljs.core.Keyword(null,"python","python",-1034889161),new cljs.core.Keyword(null,"mysql-csv","mysql-csv",-588487593),new cljs.core.Keyword(null,"rails-console-ecs","rails-console-ecs",1769714744),new cljs.core.Keyword(null,"rails","rails",-447416295),new cljs.core.Keyword(null,"mysql","mysql",-1431590210)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"PG_HOST",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"PG_USER",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"PG_PASS",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"PG_DB",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"VAULT_ADDR",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"VAULT_TOKEN",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"KUBE_CONFIG_DATA",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"KUBE_CONFIG_DATA",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"KUBE_CONFIG_DATA",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"KUBE_CONFIG_DATA",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"NAMESPACE",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"DEPLOYMENT",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MONGO_CONNECTION_URI",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"PG_HOST",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"PG_USER",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"PG_PASS",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"PG_DB",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MSSQL_CONNECTION_URI",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MSSQL_USER",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MSSQL_PASS",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MSSQL_DB",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MYSQL_HOST",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MYSQL_USER",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MYSQL_PASS",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MYSQL_DB",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ECS_CLUSTER",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ECS_SERVICE_NAME",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ECS_CONTAINER",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ECS_AWS_ACCESS_KEY_ID",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ECS_AWS_SECRET_ACCESS_KEY",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"ECS_AWS_REGION",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MYSQL_HOST",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MYSQL_USER",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MYSQL_PASS",new cljs.core.Keyword(null,"value","value",305978217),""], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"MYSQL_DB",new cljs.core.Keyword(null,"value","value",305978217),""], null)], null)]);
webapp.targets.constants.target_configs_required_stringify = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"hashicorp-vault","hashicorp-vault",341592706),new cljs.core.Keyword(null,"k8s-exec","k8s-exec",-502099740),new cljs.core.Keyword(null,"k8s","k8s",-1824650905),new cljs.core.Keyword(null,"bash","bash",1176231467),new cljs.core.Keyword(null,"k8s-apply","k8s-apply",2139360429),new cljs.core.Keyword(null,"rails-console-k8s","rails-console-k8s",626405581),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"mongodb","mongodb",-2105512721),new cljs.core.Keyword(null,"postgres-csv","postgres-csv",-1073884305),new cljs.core.Keyword(null,"rails-console","rails-console",1187206578),new cljs.core.Keyword(null,"sql-server","sql-server",-101377933),new cljs.core.Keyword(null,"python","python",-1034889161),new cljs.core.Keyword(null,"mysql-csv","mysql-csv",-588487593),new cljs.core.Keyword(null,"rails-console-ecs","rails-console-ecs",1769714744),new cljs.core.Keyword(null,"rails","rails",-447416295),new cljs.core.Keyword(null,"mysql","mysql",-1431590210)],["{\n   \"PG_HOST\": \"{YOUR_PG_HOST}\",\n   \"PG_USER\": \"{YOUR_PG_USER}\",\n   \"PG_PASS\": \"{YOUR_PG_PASS}\",\n   \"PG_DB\": \"{YOUR_PG_DB}\"\n}","{\n   \"VAULT_ADDR\": \"{YOUR_VAULT_ADDR}\",\n   \"VAULT_TOKEN\": \"{YOUR_VAULT_TOKEN}\"\n}","{\n   \"KUBE_CONFIG_DATA\": \"{YOUR_KUBE_CONFIG_DATA}\"\n}","{\n   \"KUBE_CONFIG_DATA\": \"{YOUR_KUBE_CONFIG_DATA}\"\n}","{\n   \"YOUR_ENV_CONFIG_KEY\": \"{YOUR_ENV_CONFIG_VALUE}\"\n}","{\n   \"KUBE_CONFIG_DATA\": \"{YOUR_KUBE_CONFIG_DATA}\"\n}","{\n   \"KUBE_CONFIG_DATA\": \"{YOUR_KUBE_CONFIG_DATA}\",\n   \"NAMESPACE\": \"{YOUR_NAMESPACE}\",\n   \"DEPLOYMENT\": \"{YOUR_DEPLOYMENT}\"\n}","{\n   \"YOUR_ENV_CONFIG_KEY\": \"{YOUR_ENV_CONFIG_VALUE}\"\n}","{\n   \"MONGO_CONNECTION_URI\": \"{YOUR_MONGO_CONNECTION_URI}\"\n}","{\n   \"PG_HOST\": \"{YOUR_PG_HOST}\",\n   \"PG_USER\": \"{YOUR_PG_USER}\",\n   \"PG_PASS\": \"{YOUR_PG_PASS}\",\n   \"PG_DB\": \"{YOUR_PG_DB}\"\n}","{\n   \"YOUR_ENV_CONFIG_KEY\": \"{YOUR_ENV_CONFIG_VALUE}\"\n}","{\n   \"MSSQL_CONNECTION_URI\": \"{YOUR_MSSQL_CONNECTION_URI}\",\n   \"MSSQL_USER\": \"{YOUR_MSSQL_USER}\",\n   \"MSSQL_PASS\": \"{YOUR_MSSQL_PASS}\",\n   \"MSSQL_DB\": \"{YOUR_MSSQL_DB}\"\n}","{\n   \"YOUR_ENV_CONFIG_KEY\": \"{YOUR_ENV_CONFIG_VALUE}\"\n}","{\n   \"MYSQL_HOST\": \"{YOUR_MYSQL_HOST}\",\n   \"MYSQL_USER\": \"{YOUR_MYSQL_USER}\",\n   \"MYSQL_PASS\": \"{YOUR_MYSQL_PASS}\",\n   \"MYSQL_DB\": \"{YOUR_MYSQL_DB}\"\n}","{\n   \"ECS_CLUSTER\": \"{YOUR_ECS_CLUSTER}\",\n   \"ECS_SERVICE_NAME\": \"{YOUR_ECS_SERVICE_NAME}\",\n   \"ECS_CONTAINER\": \"{YOUR_ECS_CONTAINER}\",\n   \"ECS_AWS_ACCESS_KEY_ID\": \"{YOUR_ECS_AWS_ACCESS_KEY_ID}\",\n   \"ECS_AWS_SECRET_ACCESS_KEY\": \"{YOUR_ECS_AWS_SECRET_ACCESS_KEY}\",\n   \"ECS_AWS_REGION\": \"{YOUR_ECS_AWS_REGION}\"\n}","{\n   \"YOUR_ENV_CONFIG_KEY\": \"{YOUR_ENV_CONFIG_VALUE}\"\n}","{\n   \"MYSQL_HOST\": \"{YOUR_MYSQL_HOST}\",\n   \"MYSQL_USER\": \"{YOUR_MYSQL_USER}\",\n   \"MYSQL_PASS\": \"{YOUR_MYSQL_PASS}\",\n   \"MYSQL_DB\": \"{YOUR_MYSQL_DB}\"\n}"]);
webapp.targets.constants.help_link_base = "https://runops.io/docs/concepts/integrations/";
webapp.targets.constants.target_config_help_link = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"postgres","postgres",-439520670),new cljs.core.Keyword(null,"hashicorp-vault","hashicorp-vault",341592706),new cljs.core.Keyword(null,"k8s-exec","k8s-exec",-502099740),new cljs.core.Keyword(null,"k8s","k8s",-1824650905),new cljs.core.Keyword(null,"bash","bash",1176231467),new cljs.core.Keyword(null,"k8s-apply","k8s-apply",2139360429),new cljs.core.Keyword(null,"rails-console-k8s","rails-console-k8s",626405581),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"mongodb","mongodb",-2105512721),new cljs.core.Keyword(null,"postgres-csv","postgres-csv",-1073884305),new cljs.core.Keyword(null,"rails-console","rails-console",1187206578),new cljs.core.Keyword(null,"sql-server","sql-server",-101377933),new cljs.core.Keyword(null,"python","python",-1034889161),new cljs.core.Keyword(null,"mysql-csv","mysql-csv",-588487593),new cljs.core.Keyword(null,"rails-console-ecs","rails-console-ecs",1769714744),new cljs.core.Keyword(null,"rails","rails",-447416295),new cljs.core.Keyword(null,"mysql","mysql",-1431590210)],[[webapp.targets.constants.help_link_base,"postgres"].join(''),[webapp.targets.constants.help_link_base,"vault-cli"].join(''),[webapp.targets.constants.help_link_base,"kubernetes-exec"].join(''),[webapp.targets.constants.help_link_base,"kubernetes"].join(''),[webapp.targets.constants.help_link_base,"shell"].join(''),[webapp.targets.constants.help_link_base,"kubernetes-apply"].join(''),[webapp.targets.constants.help_link_base,"rails-console-k8s"].join(''),[webapp.targets.constants.help_link_base,"node"].join(''),[webapp.targets.constants.help_link_base,"mongodb"].join(''),[webapp.targets.constants.help_link_base,"postgres"].join(''),[webapp.targets.constants.help_link_base,""].join(''),[webapp.targets.constants.help_link_base,"mssql"].join(''),[webapp.targets.constants.help_link_base,"python"].join(''),[webapp.targets.constants.help_link_base,"mysql"].join(''),[webapp.targets.constants.help_link_base,"rails-console-ecs"].join(''),[webapp.targets.constants.help_link_base,""].join(''),[webapp.targets.constants.help_link_base,"mysql"].join('')]);

//# sourceMappingURL=webapp.targets.constants.js.map
