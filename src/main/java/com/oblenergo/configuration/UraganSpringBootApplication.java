package com.oblenergo.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication(exclude = { HibernateJpaAutoConfiguration.class }, scanBasePackages = "com.oblenergo")
public class UraganSpringBootApplication {

  public static void main(String[] args) {

    SpringApplication.run(UraganSpringBootApplication.class, args);
  }

}
