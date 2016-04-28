module UsersHelper

  def check_box(user, show_check)
    if show_check
      content_tag(:td) do
        content_tag(:div, class: "checkbox checkbox-primary") do
          check_box_tag("user[#{user.id}]", user.id, true) +   # wegen '+' : http://stackoverflow.com/questions/4205613/rails-nested-content-tag
          content_tag(:label)
        end
      end
    end
  end

end
