//package com.olock.blockstock.member.global.config;
//
//import org.neo4j.driver.Driver;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.neo4j.core.ReactiveDatabaseSelectionProvider;
//import org.springframework.data.neo4j.core.transaction.ReactiveNeo4jTransactionManager;
//import org.springframework.data.neo4j.repository.config.ReactiveNeo4jRepositoryConfigurationExtension;
//import org.springframework.transaction.ReactiveTransaction;
//import org.springframework.transaction.ReactiveTransactionManager;
//import org.springframework.transaction.TransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//import org.springframework.transaction.reactive.TransactionalOperator;
//
//@Configuration
//@EnableTransactionManagement
//public class TransactionConfig {
//
//    @Bean(ReactiveNeo4jRepositoryConfigurationExtension.DEFAULT_TRANSACTION_MANAGER_BEAN_NAME)
//    public ReactiveTransactionManager reactiveTransactionManager(Driver driver, ReactiveDatabaseSelectionProvider databaseNameProvider) {
//        return new ReactiveNeo4jTransactionManager(driver, databaseNameProvider);
//    }
//}