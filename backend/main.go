// main.go
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Message struct {
	Text string `json:"text"`
}

func main() {
	http.HandleFunc("/api/message", func(w http.ResponseWriter, r *http.Request) {
		message := Message{Text: "Hello from Go!"}
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(message)
	})

	port := 8080
	fmt.Printf("Server is running on :%d...\n", port)
	http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
