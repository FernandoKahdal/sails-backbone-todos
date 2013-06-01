define(['CollectionView', 'Todo/TodoItemView'],
function TodoCollectionView(CollectionView, TodoItemView) {
  return CollectionView.extend({
    className: 'todos',
    tagName: 'ul',
    itemView: TodoItemView
  });
});
