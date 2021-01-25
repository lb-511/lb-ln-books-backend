# lb-ln-books-backend

## Gruppenmitglieder
 - Leon Baumann, 32022
 - Laura Niechoj, 32028
 
## Rest API Url
Base Url: [https://lb-ln-books-backend.herokuapp.com](https://lb-ln-books-backend.herokuapp.com)

### Mögliche Anfragen
- `GET /subjects/:my_subject`
  - Liefert alle bücher aus my_subject
  - parameter: my_subject
  
## Verwendete fremde Codebestandteile

Zeile 8 - 16
```javascript
//Middleware
app.use(express.json()); //for parsing application/json
app.use(cors()); //for configuring Cross-Origin Resource Sharing (CORS)

function log(req, res, next) {
    console.log(req.method + " Request at" + req.url);
    next();
}
app.use(log);
//Dieser Codebestandteil wurde aus dem Backend der "Professor Rating App" aus der Vorlesung entnommen.
```

## Projektbeschreibung
Dieses Backend dient zur *Vereinfachung* des Umgangs mit der Openlibrary Api. \
Wir wollten bestimmte Informationen der Bücher darstellen, diese müssen aber durch mehrere verkettete Api-Anfragen zusammengestellt werden. \
Diesen Code wollten wir nicht im Frontend haben und haben deswegen ein eigenes Backend erstellt.

### Architektur
Da unser Backend sehr klein gehalten ist, gibt es hier keine sonderliche Architektur.

Die einzige mögliche API-Anfrage befindet sich direkt in der `server.js`

Besonderst ist hier aber:
```
lb-ln-books-backend/
-helpers/
--bookTransformer.js
```

Der `bookTransformer.js` exportiert jeglich eine Funktion, welche aus gegebenen Daten ein Buch zusammenstellt, wie wir es im Frontend verwenden wollen.
Umgelagert in eine einzelne Datei haben wir das, weil wir etwas ***Modularisierung*** haben wollten.


## Project Setup
Nötige Schritte:

```npm
npm install
```

Start with Hotreload for development
```
npm run dev
```

Normal start
```
npm run start
```
