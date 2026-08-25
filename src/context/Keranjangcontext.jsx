import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const Keranjangcontext = createContext();

export const KeranjangProvider = ({ children }) => {
    const [item, setItem] = useLocalStorage("keranjang", []);

    function tambahkekeranjang(produk){
        setItem((prevItem) => {
            const sudahAda = prevItem.find((p) => p.id === produk.id);
            if (sudahAda) {
                return prevItem.map((p) =>
                    p.id === produk.id ? { ...p, jumlah: p.jumlah + 1 } : p
                );
            }
            return [...prevItem, { ...produk, jumlah: 1 }];
        });
    }

    function hapusdarikeranjang(id){
        setItem((prevItem) => prevItem.filter((p) => p.id !== id));
    }

    function ubahjumlah(id, jumlahBaru){
        if (jumlahBaru < 1) {
            hapusdarikeranjang(id);
            return;
        }
        setItem((prevItem) =>
            prevItem.map((p) =>
                p.id === id ? { ...p, jumlah: jumlahBaru } : p
            )
        );
    }

    return (
        <Keranjangcontext.Provider
            value={{ item, tambahkekeranjang, hapusdarikeranjang, ubahjumlah }}
        >
            {children}
        </Keranjangcontext.Provider>
    );
}

export default function usekeranjang(){
    return useContext(Keranjangcontext);
}