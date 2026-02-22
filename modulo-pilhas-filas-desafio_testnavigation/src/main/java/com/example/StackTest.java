package com.example;

public class StackTest {

    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();

        System.out.println("stack.count(): " + stack.count());
        System.out.println("stack.isEmpty(): " + stack.isEmpty());

        stack.push("Maria");
        stack.push("Joao");
        stack.push("Ana");
        System.out.println("Adicionados: Maria, Joao, Ana");

        System.out.println("stack.count(): " + stack.count());
        System.out.println("stack.isEmpty(): " + stack.isEmpty());
        System.out.println("stack.peek(): " + stack.peek());

        System.out.println("Itens:");
        while (!stack.isEmpty()) {
            System.out.println(stack.pop());
        }

    }
}
