import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import useKeranjang, { KeranjangProvider } from "./Keranjangcontext.jsx";

beforeEach(() => {
  localStorage.clear();
});

const wrapper = ({ children }) => <KeranjangProvider>{children}</KeranjangProvider>;

describe("context keranjang", () => {
  it("produk baru masuk ke keranjang dengan jumlah 1", () => {
    const { result } = renderHook(() => useKeranjang(), { wrapper });

    act(() => {
      result.current.tambahkekeranjang({ id: 1, title: "Kaos", price: 5 });
    });

    expect(result.current.item).toHaveLength(1);
    expect(result.current.item[0].jumlah).toBe(1);
  });

  it("kalo produk sama ditambahin lagi, jumlahnya nambah bukan dobel item", () => {
    const { result } = renderHook(() => useKeranjang(), { wrapper });

    act(() => {
      result.current.tambahkekeranjang({ id: 1, title: "Kaos", price: 5 });
      result.current.tambahkekeranjang({ id: 1, title: "Kaos", price: 5 });
    });

    expect(result.current.item).toHaveLength(1);
    expect(result.current.item[0].jumlah).toBe(2);
  });

  it("hapusdarikeranjang bikin item ilang dari list", () => {
    const { result } = renderHook(() => useKeranjang(), { wrapper });

    act(() => {
      result.current.tambahkekeranjang({ id: 1, title: "Kaos", price: 5 });
      result.current.hapusdarikeranjang(1);
    });

    expect(result.current.item).toHaveLength(0);
  });
});