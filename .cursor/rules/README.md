# Cursor Rules Directory

This directory contains Cursor AI rules that provide documentation and templates for common workflows in this project.

## Available Rules

### 1. `html-template-call-prep.mdc`
**Purpose:** Generate consistent, professional call preparation documents for customer meetings.

**When to use:** Before customer calls, demos, or technical Q&A sessions.

**Usage in Cursor:**
```
@call-prep Create a call prep for [Company Name] - [Call Type]
```

**Example:**
```
@call-prep Create a call prep for Acme Corp - Technical Demo
```

### 2. `plaid-solutions-architect-ai.mdc`
**Purpose:** Document the Plaid Solutions Architect AI tool - an interactive solution guide generator.

**When to use:** 
- Creating technical proposals for prospects
- Designing Plaid integration architectures
- Estimating implementation scope
- Generating customer-facing documentation

**Usage in Cursor:**
```
@plaid-solutions-architect-ai How do I generate a solution guide for ACH payments?
@plaid-solutions-architect-ai What products should I recommend for lending use cases?
@plaid-solutions-architect-ai How do I deploy the backend server?
```

**Key Topics Covered:**
- Product recommendations (Auth, Transactions, Balance, Signal, Transfer, Income, IDV, Assets, Check)
- Architecture diagram generation
- Code samples (Node.js, Python)
- Scope estimation (timeline, complexity, team size)
- Live demo capability
- Deployment instructions

## How Cursor Rules Work

### Referencing Rules in Chat

Use the `@` symbol followed by the rule name (without `.mdc`):

```
@call-prep [your request]
@plaid-solutions-architect-ai [your request]
```

### What Rules Provide

Cursor rules give the AI:
- **Context** about your project and workflows
- **Templates** for consistent output
- **Best practices** specific to your team
- **Styling guidelines** for HTML/CSS
- **Integration patterns** with other tools

### When to Create New Rules

Create a new `.mdc` rule file when:
- You have a repeatable workflow
- You need consistent output formatting
- You want to document a tool or process
- Multiple team members need the same knowledge

## Rule File Format

Rules use Markdown (`.mdc`) format:

```markdown
# Rule Title

Brief description of what this rule does.

## When to Use

Explain the use cases...

## Templates

Provide code templates...

## Guidelines

List best practices...
```

## Sharing Rules with Team

### Via GitHub

1. Commit `.cursor/rules/` directory:
   ```bash
   git add .cursor/rules/
   git commit -m "Add Cursor rules for team"
   git push
   ```

2. Team members pull the repo:
   ```bash
   git pull
   ```

3. Rules are automatically available in Cursor!

### Via File Share

Send the entire `.cursor/rules/` directory to teammates. They should place it in their project root.

## Best Practices

### For Rule Authors

1. **Be specific** - Clear, actionable guidelines work best
2. **Include examples** - Show, don't just tell
3. **Update regularly** - Keep rules current as processes evolve
4. **Document edge cases** - Cover common gotchas
5. **Version your rules** - Note updates in the file

### For Rule Users

1. **Read the full rule** - Understand the context before using
2. **Reference frequently** - Don't memorize, reference!
3. **Provide feedback** - Let authors know what works/doesn't work
4. **Suggest improvements** - Rules should evolve with the team

## Troubleshooting

### Rule Not Showing Up in Cursor

1. Restart Cursor
2. Check file is in `.cursor/rules/` directory
3. Verify file extension is `.mdc`
4. Check file isn't corrupted (open in text editor)

### AI Not Following Rule

1. Be more explicit in your request
2. Reference the rule by name: `@rule-name`
3. Provide more context in your prompt
4. Check if rule conflicts with other instructions

### Rule Producing Unexpected Output

1. Review the rule content for clarity
2. Provide more specific inputs
3. Update the rule if needed
4. Report issues to rule maintainer

## Contributing

To add or update rules:

1. Create/edit `.mdc` file in `.cursor/rules/`
2. Follow existing rule structure
3. Test with Cursor AI
4. Document in this README
5. Commit and share with team

---

**Maintained By:** Solutions Engineering Team  
**Last Updated:** January 2026  
**Questions?** Contact your team lead

