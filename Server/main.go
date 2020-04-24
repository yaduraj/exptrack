package main

import(
	"net/http"
	"log"
	"fmt"
	"encoding/json"
)

type Expense struct {
	Amount string `json:"amount"`
	Category string `json:"category"`
	Timestamp string `json:"date"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		//fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))

		log.Println(r);

	decoder := json.NewDecoder(r.Body)
	log.Println(r.Body);
    var t Expense
    err := decoder.Decode(&t)
    if err != nil {
		log.Println(err)
        panic(err)
	}
	
    log.Println(t.Timestamp)
	})

	http.HandleFunc("/addExpense", addExpense)
	http.HandleFunc("/addExpense1", addExpense)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func addExpense1(w http.ResponseWriter, r *http.Request){
	fmt.Println(r.Body)
}

func addExpense(w http.ResponseWriter, r *http.Request) {
	log.Println(r);

	decoder := json.NewDecoder(r.Body)
	log.Println(r.Body);
    var t Expense
    err := decoder.Decode(&t)
    if err != nil {
		log.Println(err)
        panic(err)
	}
	
    log.Println(t.Timestamp)
}