//const fs = require("fs")
import fs from "fs"
//const csv = require("csv-parser")
import csvParser from "csv-parser"

export default function getcsv() {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream("./products.csv")
      .pipe(csvParser())
      .on("data", (row) => {
        let categoria = row.category?.trim() || "generico";
        categoria = categoria.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const precoBruto = row.price?.trim();
        const preco = precoBruto
          ? parseFloat(
            precoBruto
              .replace(/"/g, "")
              .replace(/\./g, "")
              .replace(",", ".")
          )
          : -1;

        results.push({
          id: +row.id,
          name: row.name.trim(),
          category: categoria,
          price: preco,
          marketing_description: "Descrição do Produto Indisponível",
        });
      })
      .on("end", () => {
        resolve(results);
      })
      .on("error", reject);
  });
}