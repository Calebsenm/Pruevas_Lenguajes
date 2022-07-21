defmodule Solution do 
  def main do 
    times = IO.gets("")|> String.trim |> String.to_integer
    get_input(IO.gets(""),[])

    |> Enum.map(fn x -> 
          String.trim(x)|> List.duplicate(times)
      )
    |>Enum.reverse
    |>Enum.map(fn x -> Enum.map(x, fn y -> IO.puts y end)end)
    end 

    defp get_input(:oef,list),do: list 
    defp get_input(number,list) do 
      list
      get_input(IO.gets(""),[number|list])
    end


end 

Solution.main()


