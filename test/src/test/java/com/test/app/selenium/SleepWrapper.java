package com.test.app.selenium;

import java.util.concurrent.TimeUnit;

public class SleepWrapper {

  private static int WAIT_MILLISECONDS = 1000;

  public static void sleep(int milliseconds) {
    try {
      TimeUnit.MILLISECONDS.sleep(milliseconds);
    } catch (InterruptedException e) {
      System.err.println("Unable to sleep.");
    }
  }

  public static void sleep() {
    SleepWrapper.sleep(WAIT_MILLISECONDS);
  }
  
}
