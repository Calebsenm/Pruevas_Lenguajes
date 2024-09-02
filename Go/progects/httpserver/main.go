

package main 

import (
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
)

func getRoot(w http.ResponseWriter, r *http.Request){
	fmt.Printf("got /request\n")
	io.WriteString(w, "This is my website!\n")
}

func getHello(w http.ResponseWriter, r *http.Request){
	fmt.Printf("got /hello request\n")
	io.WriteString(w,"hello,HTTP!\n")
	
}

func main(){
	http.HandleFunc("/", getRoot)
	http.HandleFunc("/", getHello)

	err := http.ListenAndServe(":3333",nil)
	if errors.Is(err, http.ErrServerClosed){
		fmt.Printf("Served closed\n")

	}else if err != nil {
		fmt.Printf("error starting server: %s\n",err)
		os.Exit(1)
	}

}
