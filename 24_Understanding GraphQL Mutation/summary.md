# (23) Understanding GraphQL Mutation

## Mutation

- Mutation adalah sebuah Query yang dapat kita lalukan untuk Insert, Update, Dele

- Berikut 3 Jenis Mutation

## 1. Mutation Insert

```
mutation MyMutation($text: String!) {
            insert_todo_one(object: { text: $text })
            {
              text
              id
            }
}

{
    "text" :"text"
}
```

## 2. Mutation delete

```
mutation MyMutation2($id: Int!)
{
    delete_todo_by_pk(id: $id) {
        text
        id
        }
}
{
    "id":3
}
```

## 3. Mutation Update

```
mutation MyMutation3($id: Int!, $text: String!) {
update_todo_by_pk(pk_columns: { id: $id }, _set: { text: $text }) {
    text
    id
    }
}
{
    "id"    : 2,
    "text"  : "roland ganteng",
}
```

# TASK

Tugas kali ini kita diminta membuat mutation insert todo,update, dan delete, detilnya [disini](https://docs.google.com/document/d/1QB3Yc5irk_zeIYZo5rxR6CGnMXGiICTujlyaWuZ7xqc/edit)

- berikut [hasilnya](praktikum/)

- dan ini screenshotsnya:

1. ![](screenshots/todoInput.jpg.png)
1. ![](screenshots/todoEdit.png.png)
