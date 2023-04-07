function BulletList(elem)
    if elem.style == "Unordered" then
      local items = {}
      for _, item in pairs(elem.content) do
        table.insert(items, pandoc.Div(item, pandoc.Attr("", {"item"})))
      end
      return pandoc.Div(pandoc.List(items), pandoc.Attr("", {"list"}))
    end
  end
  