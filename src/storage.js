import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const FILE = join(process.cwd(), "expenses.json");
console.log(FILE);

export function loadExpenses() {
    if (!existsSync(FILE)) {
        return [];
    }

    const text = readFileSync(FILE, "utf-8");
    return JSON.parse(text); // deserializacija ili parsiranje teksta u "kod"
}

export function saveExpenses(expenses) {
    writeFileSync(FILE, JSON.stringify(expenses)); //spremanje, tj. serijalizacija "koda" u tekst
}
