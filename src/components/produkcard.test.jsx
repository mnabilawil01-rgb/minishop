import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { KeranjangProvider } from "../context/Keranjangcontext.jsx";
import ProdukCard from "./produkcard.jsx";

const barangContoh = { id: 1, title: "Kaos Polos", price: 5, image: "kaos.jpg" };

function bungkusRender(barang) {
  return render(
    <BrowserRouter>
      <KeranjangProvider>
        <ProdukCard produk={barang} />
      </KeranjangProvider>
    </BrowserRouter>
  );
}

describe("ProdukCard", () => {
  it("judul produk muncul di layar", () => {
    bungkusRender(barangContoh);
    expect(screen.getByText("Kaos Polos")).toBeInTheDocument();
  });

  it("hargadikonversi ke rupiah", () => {
    bungkusRender(barangContoh);
    expect(screen.getByText(/75\.000/)).toBeInTheDocument();
  });
});