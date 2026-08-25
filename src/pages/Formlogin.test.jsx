import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AuthProvider } from "../context/AuthContext.jsx";
import FormLogin from "./Formlogin.jsx";

function bukaForm() {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <FormLogin />
      </AuthProvider>
    </BrowserRouter>
  );
}

describe("FormLogin", () => {
  it("nolak kalo email gak ada tanda @", () => {
    bukaForm();
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "emailnyangaco" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "rahasia123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByText("Email tidak valid")).toBeInTheDocument();
  });

  it("nolak kalo password kurang dari 6 huruf", () => {
    bukaForm();
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "budi@mail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByText("Password minimal 6 karakter")).toBeInTheDocument();
  });
});