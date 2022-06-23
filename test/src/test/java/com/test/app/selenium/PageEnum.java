package com.test.app.selenium;

public enum PageEnum {
  
  INDEX(""), LOGIN("login"), REGISTER("register"), 
  CATEGORY("category"), STORED_LISTS("lists"), CART("cart");

  private final String baseUrl = "http://deti-tqs-12.ua.pt:9200/";
  private final String pageUrl;

  private PageEnum (String pageUrl) {
    this.pageUrl = pageUrl;
  }

  public String getUrl() {
    return baseUrl + pageUrl;
  }

}
