package com.test.app.selenium;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductsPage {

  @FindBy(tagName = "app-product")
  private List<WebElement> products;

  public static ProductsPage getInstance(WebDriver driver) {
    driver.get(PageEnum.INDEX.getUrl());
    return PageFactory.initElements(driver, ProductsPage.class);
  }

  public static ProductsPage getInstance(WebDriver driver, int category) {
    driver.get(PageEnum.CATEGORY.getUrl() + "/" + category);
    return PageFactory.initElements(driver, ProductsPage.class);
  }
  
}
