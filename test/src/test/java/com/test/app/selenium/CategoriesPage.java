package com.test.app.selenium;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CategoriesPage {

  @FindBy(className = "col-lg-4")
  private List<WebElement> categories;

  public static CategoriesPage getInstance(WebDriver driver) {
    driver.get(PageEnum.INDEX.getUrl());
    return PageFactory.initElements(driver, CategoriesPage.class);
  }
  
}
