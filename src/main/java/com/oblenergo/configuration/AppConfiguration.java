package com.oblenergo.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class AppConfiguration {

  @Bean
  public WebMvcConfigurer webMvcConfigurer() {
    return new WebMvcConfigurerAdapter() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("POST", "GET", "OPTIONS", "DELETE")
            .allowedHeaders("X-requested-with", "Content-Type").maxAge(3600);
      }
    };
  }

  // @Bean
  // public MessageSource messageSource() {
  //
  // ResourceBundleMessageSource messageSource = new
  // ResourceBundleMessageSource();
  // messageSource.setBasename("validationMessage");
  // return messageSource;
  // }

}
