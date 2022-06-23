package com.test.app.selenium;

public enum PageEnum {
  
  LOGIN("/login"), REGISTER("/register");

  private final String baseUrl = "http://172.17.0.1:4200";
  private final String pageUrl;

  private PageEnum (String pageUrl) {
    this.pageUrl = pageUrl;
  }

  public String getUrl() {
    return baseUrl + pageUrl;
  }

}
