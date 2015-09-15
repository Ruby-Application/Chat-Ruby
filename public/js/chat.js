if (typeof jQuery !== "undefined" && typeof React !== "undefined") {
	var ChatReact = function(messages) {
		if (typeof messages === "undefined") {
			messages = [];
		}

		jQuery.react = {};
		this.initialMessages = messages;
		this.init();
	};

	ChatReact.prototype.init = function() {
		jQuery.react.form = React.createClass({displayName : "ChatReact.Form",
			handleSubmit : function(e) {
				e.preventDefault();
				this.props.onMessageSubmit({
					author : {
						nome : window.localStorage.name
					},
					texto : React.findDOMNode(this.refs.crMessage).value,
					dt_envio : new Date()
				});

				React.findDOMNode(this.refs.crMessage).value = '';
			},
			render : function() {
				return (
					React.createElement("form", {className: "row", method: "POST", onSubmit: this.handleSubmit},
						React.createElement("div", {className: "col-md-10 form-group"},
							React.createElement("input", {className: "form-control", type: "text", ref: "crMessage"})
						),
						React.createElement("div", {className: "col-md-2 form-group"},
							React.createElement("button", {className: "btn btn-block btn-primary", type: "submit"}, "Enviar")
						)
					)
				);
			}
		});

		jQuery.react.chatListItem = React.createClass({displayName : "ChatReact.ChatListItem",
			componentDidMount : function() {
				var $ul = jQuery('ul.cr-list');
				$ul.scrollTop($ul[0].scrollHeight);
			},
			render : function() {
				var message = this.props.message;

				return (
					React.createElement("li", {className: "cr-list-item"},
						React.createElement("div", {className: "author-meta"},
							React.createElement("span", {className: "author-name"}, message.author.nome)
						),
						React.createElement("div", {className: "message-meta"},
							React.createElement("div", {className: "message-content"}, message.texto),
							React.createElement("span", {className: "message-date"}, message.dt_envio.toLocaleString())
						)
					)
				);
			}
		});

		jQuery.react.chatList = React.createClass({displayName : "ChatReact.ChatList",
			render : function() {
				var messages = this.props.messages.map(function(message){
					return (
						React.createElement(jQuery.react.chatListItem, {message: message})
					);
				});

				return (
					React.createElement("div", {className: "row"},
						React.createElement("ul", {className: "cr-list"}, messages)
					)
				);
			}
		});

		jQuery.react.chat = React.createClass({displayName : "ChatReact.Chat",
			getInitialState : function() {
				return {messages: this.props.messages};
			},
			setMessagesState : function (data) {
				this.setState(jQuery.extend({}, this.state, data));
			},
			concatMessage : function(message) {
				if (Array.isArray(message)) {
					this.setMessagesState({messages : this.state.messages.concat(message)});
				} else {
					this.setMessagesState({messages : this.state.messages.concat([message])});
				}
			},
			handleFormSubmit : function(message) {
				this.concatMessage(message);
			},
			render : function() {
				return (
					React.createElement("div", {className: "cr-chat"},
						React.createElement(jQuery.react.chatList, {messages: this.state.messages}),
						React.createElement(jQuery.react.form, {onMessageSubmit: this.handleFormSubmit})
					)
				);
			}
		});
	};

	ChatReact.prototype.render = function(idElement) {
		React.render(
			React.createElement(jQuery.react.chat, {messages: this.initialMessages}),
			document.getElementById(idElement)
		);
	};
}