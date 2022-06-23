package com.test.app.selenium;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class StoredListsPage {
  
  public static StoredListsPage getInstance(WebDriver driver) {
    driver.get(PageEnum.STORED_LISTS.getUrl());
    return PageFactory.initElements(driver, StoredListsPage.class);
  }

}
