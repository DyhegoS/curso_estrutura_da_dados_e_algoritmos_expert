package com.example;

public class Browser {
    private String currentPage = "home";
    private Stack<String> backStack = new Stack<>();
    private Stack<String> forwardStack = new Stack<>();

    public Browser() {
    }

    public String getCurrentPage() {
        return currentPage;

    }

    public void access(String page) {
        forwardStack.clear();
        backStack.push(getCurrentPage());
        this.currentPage = page;

    }

    public void back() {
        try {
            if (backStack.isEmpty()) {
                throw new RuntimeException("Back Error");
            }
            forwardStack.push(getCurrentPage());
            currentPage = backStack.pop();
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage());
        }

    }

    public void forward() {
        try {
            if (forwardStack.isEmpty()) {
                throw new RuntimeException("Forward error");
            }

            backStack.push(getCurrentPage());
            currentPage = forwardStack.pop();
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage());
        }

    }

    @Override
    public String toString() {
        return currentPage;
    }
}
