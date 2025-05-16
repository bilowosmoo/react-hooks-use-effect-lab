import React from "react";
import { render, screen, act } from "@testing-library/react";
import Question from "../components/Question";
import '@testing-library/jest-dom';

jest.useFakeTimers();

const noop = () => {};

const testQuestion = {
  id: 1,
  prompt: "What is the capital of France?",
  answers: ["Berlin", "London", "Paris", "Madrid"],
  correctIndex: 2,
};

describe("Question Component", () => {
  test("decrements the timer by 1 every second", () => {
    render(<Question question={testQuestion} onAnswered={noop} />);

    expect(screen.queryByText(/10 seconds remaining/)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryByText(/9 seconds remaining/)).toBeInTheDocument();
  });
});
